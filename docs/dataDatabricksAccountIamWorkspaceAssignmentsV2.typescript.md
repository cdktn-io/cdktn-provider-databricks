# `dataDatabricksAccountIamWorkspaceAssignmentsV2` Submodule <a name="`dataDatabricksAccountIamWorkspaceAssignmentsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2 <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2 databricks_account_iam_workspace_assignments_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2(scope: Construct, id: string, config: DataDatabricksAccountIamWorkspaceAssignmentsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config">DataDatabricksAccountIamWorkspaceAssignmentsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config">DataDatabricksAccountIamWorkspaceAssignmentsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamWorkspaceAssignmentsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAccountIamWorkspaceAssignmentsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamWorkspaceAssignmentsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamWorkspaceAssignmentsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamWorkspaceAssignmentsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceAssignments">workspaceAssignments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceIdInput">workspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `workspaceAssignments`<sup>Required</sup> <a name="workspaceAssignments" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceAssignments"></a>

```typescript
public readonly workspaceAssignments: DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: number;
```

- *Type:* number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2Config <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.Initializer"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

const dataDatabricksAccountIamWorkspaceAssignmentsV2Config: dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.workspaceId">workspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#page_size DataDatabricksAccountIamWorkspaceAssignmentsV2#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#page_size DataDatabricksAccountIamWorkspaceAssignmentsV2#page_size}.

---

### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.Initializer"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

const dataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments: dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId">principalId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentsV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.workspaceId">workspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId"></a>

```typescript
public readonly principalId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentsV2#principal_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get"></a>

```typescript
public get(index: number): DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a>[]

---


### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountIamWorkspaceAssignmentsV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements">effectiveEntitlements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements">entitlements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId">principalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `effectiveEntitlements`<sup>Required</sup> <a name="effectiveEntitlements" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements"></a>

```typescript
public readonly effectiveEntitlements: string[];
```

- *Type:* string[]

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements"></a>

```typescript
public readonly entitlements: string[];
```

- *Type:* string[]

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: number;
```

- *Type:* number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: number;
```

- *Type:* number

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId"></a>

```typescript
public readonly principalId: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a>

---



