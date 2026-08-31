# `dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2` Submodule <a name="`dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 <a name="DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2 databricks_workspace_iam_workspace_identity_detail_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2(scope: Construct, id: string, config: DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isConstruct"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformElement"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.assignmentType">assignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.workspaceIdentityStatus">workspaceIdentityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.principalIdInput">principalIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.principalId">principalId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference</a>

---

##### `workspaceIdentityStatus`<sup>Required</sup> <a name="workspaceIdentityStatus" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.workspaceIdentityStatus"></a>

```typescript
public readonly workspaceIdentityStatus: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.principalId"></a>

```typescript
public readonly principalId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config <a name="DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config: dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.principalId">principalId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2#principal_id DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2#provider_config DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.principalId"></a>

```typescript
public readonly principalId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2#principal_id DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2#principal_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2Config.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2#provider_config DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2#provider_config}.

---

### DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig <a name="DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig: dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_identity_detail_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2 } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceIdentityDetailV2.DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

---



