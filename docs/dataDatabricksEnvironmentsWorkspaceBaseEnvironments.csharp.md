# `dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule <a name="`dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments databricks_environments_workspace_base_environments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironments(Construct Scope, string Id, DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksEnvironmentsWorkspaceBaseEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments">WorkspaceBaseEnvironments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `WorkspaceBaseEnvironments`<sup>Required</sup> <a name="WorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList WorkspaceBaseEnvironments { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments {
    string Name,
    DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec {
    string[] Dependencies = null,
    string EnvironmentVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.dependencies">Dependencies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironments#dependencies}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.environmentVersion">EnvironmentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironments#environment_version}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.dependencies"></a>

```csharp
public string[] Dependencies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironments#dependencies}.

---

##### `EnvironmentVersion`<sup>Optional</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.environmentVersion"></a>

```csharp
public string EnvironmentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/environments_workspace_base_environments#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironments#environment_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get"></a>

```csharp
private DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>[]

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId">CreatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType">EffectiveBaseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath">Filepath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId">LastUpdatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseEnvironmentType`<sup>Required</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType"></a>

```csharp
public string BaseEnvironmentType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId"></a>

```csharp
public string CreatorUserId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveBaseEnvironmentType`<sup>Required</sup> <a name="EffectiveBaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType"></a>

```csharp
public string EffectiveBaseEnvironmentType { get; }
```

- *Type:* string

---

##### `Filepath`<sup>Required</sup> <a name="Filepath" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath"></a>

```csharp
public string Filepath { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastUpdatedUserId`<sup>Required</sup> <a name="LastUpdatedUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId"></a>

```csharp
public string LastUpdatedUserId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.spec"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetEnvironmentVersion">ResetEnvironmentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetDependencies"></a>

```csharp
private void ResetDependencies()
```

##### `ResetEnvironmentVersion` <a name="ResetEnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetEnvironmentVersion"></a>

```csharp
private void ResetEnvironmentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersionInput">EnvironmentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependencies">Dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersion">EnvironmentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependenciesInput"></a>

```csharp
public string[] DependenciesInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentVersionInput`<sup>Optional</sup> <a name="EnvironmentVersionInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersionInput"></a>

```csharp
public string EnvironmentVersionInput { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependencies"></a>

```csharp
public string[] Dependencies { get; }
```

- *Type:* string[]

---

##### `EnvironmentVersion`<sup>Required</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersion"></a>

```csharp
public string EnvironmentVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec</a>

---



