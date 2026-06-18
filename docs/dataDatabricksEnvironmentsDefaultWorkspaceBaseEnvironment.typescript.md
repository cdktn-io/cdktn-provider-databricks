# `dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment` Submodule <a name="`dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment databricks_environments_default_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

new dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment(scope: Construct, id: string, config: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformDataSource"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment">cpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment">gpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cpuWorkspaceBaseEnvironment`<sup>Required</sup> <a name="cpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment"></a>

```typescript
public readonly cpuWorkspaceBaseEnvironment: string;
```

- *Type:* string

---

##### `gpuWorkspaceBaseEnvironment`<sup>Required</sup> <a name="gpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment"></a>

```typescript
public readonly gpuWorkspaceBaseEnvironment: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.Initializer"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

const dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig: dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#name DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#provider_config DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#name DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#provider_config DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}.

---

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

const dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig: dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#workspace_id DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#workspace_id DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment } from '@cdktn/provider-databricks'

new dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---



