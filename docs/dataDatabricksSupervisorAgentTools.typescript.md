# `dataDatabricksSupervisorAgentTools` Submodule <a name="`dataDatabricksSupervisorAgentTools` Submodule" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgentTools <a name="DataDatabricksSupervisorAgentTools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools databricks_supervisor_agent_tools}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools(scope: Construct, id: string, config: DataDatabricksSupervisorAgentToolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig">DataDatabricksSupervisorAgentToolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig">DataDatabricksSupervisorAgentToolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksSupervisorAgentToolsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksSupervisorAgentTools resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksSupervisorAgentTools resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSupervisorAgentTools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSupervisorAgentTools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgentTools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList">DataDatabricksSupervisorAgentToolsToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSupervisorAgentToolsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsProviderConfigOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tools"></a>

```typescript
public readonly tools: DataDatabricksSupervisorAgentToolsToolsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList">DataDatabricksSupervisorAgentToolsToolsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksSupervisorAgentToolsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentToolsConfig <a name="DataDatabricksSupervisorAgentToolsConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsConfig: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSupervisorAgentToolsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

### DataDatabricksSupervisorAgentToolsProviderConfig <a name="DataDatabricksSupervisorAgentToolsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsProviderConfig: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

### DataDatabricksSupervisorAgentToolsTools <a name="DataDatabricksSupervisorAgentToolsTools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsTools: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSupervisorAgentToolsToolsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

### DataDatabricksSupervisorAgentToolsToolsApp <a name="DataDatabricksSupervisorAgentToolsToolsApp" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsToolsApp: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsGenieSpace <a name="DataDatabricksSupervisorAgentToolsToolsGenieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsToolsGenieSpace: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#id DataDatabricksSupervisorAgentTools#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#id DataDatabricksSupervisorAgentTools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant <a name="DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#knowledge_assistant_id DataDatabricksSupervisorAgentTools#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.servingEndpointName">servingEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#serving_endpoint_name DataDatabricksSupervisorAgentTools#serving_endpoint_name}. |

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.knowledgeAssistantId"></a>

```typescript
public readonly knowledgeAssistantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#knowledge_assistant_id DataDatabricksSupervisorAgentTools#knowledge_assistant_id}.

---

##### `servingEndpointName`<sup>Optional</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.servingEndpointName"></a>

```typescript
public readonly servingEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#serving_endpoint_name DataDatabricksSupervisorAgentTools#serving_endpoint_name}.

---

### DataDatabricksSupervisorAgentToolsToolsProviderConfig <a name="DataDatabricksSupervisorAgentToolsToolsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsToolsProviderConfig: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

### DataDatabricksSupervisorAgentToolsToolsUcConnection <a name="DataDatabricksSupervisorAgentToolsToolsUcConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsToolsUcConnection: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsUcFunction <a name="DataDatabricksSupervisorAgentToolsToolsUcFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsToolsUcFunction: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsVolume <a name="DataDatabricksSupervisorAgentToolsToolsVolume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

const dataDatabricksSupervisorAgentToolsToolsVolume: dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentToolsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSupervisorAgentToolsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---


### DataDatabricksSupervisorAgentToolsToolsAppOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp">DataDatabricksSupervisorAgentToolsToolsApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolsToolsApp;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp">DataDatabricksSupervisorAgentToolsToolsApp</a>

---


### DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace">DataDatabricksSupervisorAgentToolsToolsGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolsToolsGenieSpace;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace">DataDatabricksSupervisorAgentToolsToolsGenieSpace</a>

---


### DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resetServingEndpointName">resetServingEndpointName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServingEndpointName` <a name="resetServingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```typescript
public resetServingEndpointName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">knowledgeAssistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointNameInput">servingEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointName">servingEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `knowledgeAssistantIdInput`<sup>Optional</sup> <a name="knowledgeAssistantIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```typescript
public readonly knowledgeAssistantIdInput: string;
```

- *Type:* string

---

##### `servingEndpointNameInput`<sup>Optional</sup> <a name="servingEndpointNameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```typescript
public readonly servingEndpointNameInput: string;
```

- *Type:* string

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```typescript
public readonly knowledgeAssistantId: string;
```

- *Type:* string

---

##### `servingEndpointName`<sup>Required</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```typescript
public readonly servingEndpointName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant</a>

---


### DataDatabricksSupervisorAgentToolsToolsList <a name="DataDatabricksSupervisorAgentToolsToolsList" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get"></a>

```typescript
public get(index: number): DataDatabricksSupervisorAgentToolsToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSupervisorAgentToolsTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>[]

---


### DataDatabricksSupervisorAgentToolsToolsOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksSupervisorAgentToolsToolsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference">DataDatabricksSupervisorAgentToolsToolsAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolType">toolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference">DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.app"></a>

```typescript
public readonly app: DataDatabricksSupervisorAgentToolsToolsAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference">DataDatabricksSupervisorAgentToolsToolsAppOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.genieSpace"></a>

```typescript
public readonly genieSpace: DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `knowledgeAssistant`<sup>Required</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.knowledgeAssistant"></a>

```typescript
public readonly knowledgeAssistant: DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference</a>

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolType"></a>

```typescript
public readonly toolType: string;
```

- *Type:* string

---

##### `ucConnection`<sup>Required</sup> <a name="ucConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucConnection"></a>

```typescript
public readonly ucConnection: DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference</a>

---

##### `ucFunction`<sup>Required</sup> <a name="ucFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucFunction"></a>

```typescript
public readonly ucFunction: DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.volume"></a>

```typescript
public readonly volume: DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference">DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksSupervisorAgentToolsToolsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolsTools;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>

---


### DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSupervisorAgentToolsToolsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---


### DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection">DataDatabricksSupervisorAgentToolsToolsUcConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolsToolsUcConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection">DataDatabricksSupervisorAgentToolsToolsUcConnection</a>

---


### DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction">DataDatabricksSupervisorAgentToolsToolsUcFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolsToolsUcFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction">DataDatabricksSupervisorAgentToolsToolsUcFunction</a>

---


### DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSupervisorAgentTools } from '@cdktn/provider-databricks'

new dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume">DataDatabricksSupervisorAgentToolsToolsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSupervisorAgentToolsToolsVolume;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume">DataDatabricksSupervisorAgentToolsToolsVolume</a>

---



