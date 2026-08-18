# `dataDatabricksWorkspaceEntityTagAssignments` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignments` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments databricks_workspace_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments(scope: Construct, id: string, config: DataDatabricksWorkspaceEntityTagAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig">DataDatabricksWorkspaceEntityTagAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig">DataDatabricksWorkspaceEntityTagAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments">tagAssignments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference</a>

---

##### `tagAssignments`<sup>Required</sup> <a name="tagAssignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments"></a>

```typescript
public readonly tagAssignments: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a>

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceEntityTagAssignmentsConfig: dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceEntityTagAssignmentsProviderConfig: dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceEntityTagAssignmentsTagAssignments: dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig: dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get"></a>

```typescript
public get(index: number): DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>[]

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceEntityTagAssignments } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---



