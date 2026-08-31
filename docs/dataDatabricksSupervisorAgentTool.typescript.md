# `dataDatabricksSupervisorAgentTool` Submodule <a name="`dataDatabricksSupervisorAgentTool` Submodule" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgentTool <a name="DataDatabricksSupervisorAgentTool" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool databricks_supervisor_agent_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool(scope: Construct, id: string, config: DataDatabricksSupervisorAgentToolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig">DataDatabricksSupervisorAgentToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig">DataDatabricksSupervisorAgentToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksSupervisorAgentToolProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksSupervisorAgentTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isConstruct"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformElement"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformDataSource"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksSupervisorAgentTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSupervisorAgentTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSupervisorAgentTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgentTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference">DataDatabricksSupervisorAgentToolAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference">DataDatabricksSupervisorAgentToolProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolType">toolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference">DataDatabricksSupervisorAgentToolUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference">DataDatabricksSupervisorAgentToolUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference">DataDatabricksSupervisorAgentToolVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.app"></a>

```typescript
public readonly app: DataDatabricksSupervisorAgentToolAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference">DataDatabricksSupervisorAgentToolAppOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.genieSpace"></a>

```typescript
public readonly genieSpace: DataDatabricksSupervisorAgentToolGenieSpaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolGenieSpaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `knowledgeAssistant`<sup>Required</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.knowledgeAssistant"></a>

```typescript
public readonly knowledgeAssistant: DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSupervisorAgentToolProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference">DataDatabricksSupervisorAgentToolProviderConfigOutputReference</a>

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.toolType"></a>

```typescript
public readonly toolType: string;
```

- *Type:* string

---

##### `ucConnection`<sup>Required</sup> <a name="ucConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucConnection"></a>

```typescript
public readonly ucConnection: DataDatabricksSupervisorAgentToolUcConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference">DataDatabricksSupervisorAgentToolUcConnectionOutputReference</a>

---

##### `ucFunction`<sup>Required</sup> <a name="ucFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.ucFunction"></a>

```typescript
public readonly ucFunction: DataDatabricksSupervisorAgentToolUcFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference">DataDatabricksSupervisorAgentToolUcFunctionOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.volume"></a>

```typescript
public readonly volume: DataDatabricksSupervisorAgentToolVolumeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference">DataDatabricksSupervisorAgentToolVolumeOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksSupervisorAgentToolProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentTool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentToolApp <a name="DataDatabricksSupervisorAgentToolApp" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolApp: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

### DataDatabricksSupervisorAgentToolConfig <a name="DataDatabricksSupervisorAgentToolConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolConfig: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#provider_config DataDatabricksSupervisorAgentTool#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSupervisorAgentToolProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#provider_config DataDatabricksSupervisorAgentTool#provider_config}.

---

### DataDatabricksSupervisorAgentToolGenieSpace <a name="DataDatabricksSupervisorAgentToolGenieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolGenieSpace: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#id DataDatabricksSupervisorAgentTool#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#id DataDatabricksSupervisorAgentTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksSupervisorAgentToolKnowledgeAssistant <a name="DataDatabricksSupervisorAgentToolKnowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolKnowledgeAssistant: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#knowledge_assistant_id DataDatabricksSupervisorAgentTool#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.servingEndpointName">servingEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#serving_endpoint_name DataDatabricksSupervisorAgentTool#serving_endpoint_name}. |

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId"></a>

```typescript
public readonly knowledgeAssistantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#knowledge_assistant_id DataDatabricksSupervisorAgentTool#knowledge_assistant_id}.

---

##### `servingEndpointName`<sup>Optional</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant.property.servingEndpointName"></a>

```typescript
public readonly servingEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#serving_endpoint_name DataDatabricksSupervisorAgentTool#serving_endpoint_name}.

---

### DataDatabricksSupervisorAgentToolProviderConfig <a name="DataDatabricksSupervisorAgentToolProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolProviderConfig: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#workspace_id DataDatabricksSupervisorAgentTool#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#workspace_id DataDatabricksSupervisorAgentTool#workspace_id}.

---

### DataDatabricksSupervisorAgentToolUcConnection <a name="DataDatabricksSupervisorAgentToolUcConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolUcConnection: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

### DataDatabricksSupervisorAgentToolUcFunction <a name="DataDatabricksSupervisorAgentToolUcFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolUcFunction: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

### DataDatabricksSupervisorAgentToolVolume <a name="DataDatabricksSupervisorAgentToolVolume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolVolume: dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentToolAppOutputReference <a name="DataDatabricksSupervisorAgentToolAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp">DataDatabricksSupervisorAgentToolApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolApp;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolApp">DataDatabricksSupervisorAgentToolApp</a>

---


### DataDatabricksSupervisorAgentToolGenieSpaceOutputReference <a name="DataDatabricksSupervisorAgentToolGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace">DataDatabricksSupervisorAgentToolGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolGenieSpace;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolGenieSpace">DataDatabricksSupervisorAgentToolGenieSpace</a>

---


### DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference <a name="DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName">resetServingEndpointName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServingEndpointName` <a name="resetServingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```typescript
public resetServingEndpointName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">knowledgeAssistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput">servingEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName">servingEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant">DataDatabricksSupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `knowledgeAssistantIdInput`<sup>Optional</sup> <a name="knowledgeAssistantIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```typescript
public readonly knowledgeAssistantIdInput: string;
```

- *Type:* string

---

##### `servingEndpointNameInput`<sup>Optional</sup> <a name="servingEndpointNameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```typescript
public readonly servingEndpointNameInput: string;
```

- *Type:* string

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```typescript
public readonly knowledgeAssistantId: string;
```

- *Type:* string

---

##### `servingEndpointName`<sup>Required</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```typescript
public readonly servingEndpointName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolKnowledgeAssistant;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolKnowledgeAssistant">DataDatabricksSupervisorAgentToolKnowledgeAssistant</a>

---


### DataDatabricksSupervisorAgentToolProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSupervisorAgentToolProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolProviderConfig">DataDatabricksSupervisorAgentToolProviderConfig</a>

---


### DataDatabricksSupervisorAgentToolUcConnectionOutputReference <a name="DataDatabricksSupervisorAgentToolUcConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection">DataDatabricksSupervisorAgentToolUcConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolUcConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcConnection">DataDatabricksSupervisorAgentToolUcConnection</a>

---


### DataDatabricksSupervisorAgentToolUcFunctionOutputReference <a name="DataDatabricksSupervisorAgentToolUcFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction">DataDatabricksSupervisorAgentToolUcFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolUcFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolUcFunction">DataDatabricksSupervisorAgentToolUcFunction</a>

---


### DataDatabricksSupervisorAgentToolVolumeOutputReference <a name="DataDatabricksSupervisorAgentToolVolumeOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTool } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume">DataDatabricksSupervisorAgentToolVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolVolume;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTool.DataDatabricksSupervisorAgentToolVolume">DataDatabricksSupervisorAgentToolVolume</a>

---



