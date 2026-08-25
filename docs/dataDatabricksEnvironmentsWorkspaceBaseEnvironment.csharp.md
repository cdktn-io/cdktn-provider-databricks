# `dataDatabricksEnvironmentsWorkspaceBaseEnvironment` Submodule <a name="`dataDatabricksEnvironmentsWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironment <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment databricks_environments_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironment(Construct Scope, string Id, DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEnvironmentsWorkspaceBaseEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksEnvironmentsWorkspaceBaseEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksEnvironmentsWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.creatorUserId">CreatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType">EffectiveBaseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.filepath">Filepath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId">LastUpdatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BaseEnvironmentType`<sup>Required</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType"></a>

```csharp
public string BaseEnvironmentType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.creatorUserId"></a>

```csharp
public string CreatorUserId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveBaseEnvironmentType`<sup>Required</sup> <a name="EffectiveBaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType"></a>

```csharp
public string EffectiveBaseEnvironmentType { get; }
```

- *Type:* string

---

##### `Filepath`<sup>Required</sup> <a name="Filepath" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.filepath"></a>

```csharp
public string Filepath { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastUpdatedUserId`<sup>Required</sup> <a name="LastUpdatedUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId"></a>

```csharp
public string LastUpdatedUserId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfig"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.spec"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#name DataDatabricksEnvironmentsWorkspaceBaseEnvironment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironment#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#name DataDatabricksEnvironmentsWorkspaceBaseEnvironment#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironment#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec {
    string[] Dependencies = null,
    string EnvironmentVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies">Dependencies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironment#dependencies}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion">EnvironmentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironment#environment_version}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies"></a>

```csharp
public string[] Dependencies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironment#dependencies}.

---

##### `EnvironmentVersion`<sup>Optional</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion"></a>

```csharp
public string EnvironmentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/environments_workspace_base_environment#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironment#environment_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion">ResetEnvironmentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies"></a>

```csharp
private void ResetDependencies()
```

##### `ResetEnvironmentVersion` <a name="ResetEnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion"></a>

```csharp
private void ResetEnvironmentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput">EnvironmentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies">Dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion">EnvironmentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput"></a>

```csharp
public string[] DependenciesInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentVersionInput`<sup>Optional</sup> <a name="EnvironmentVersionInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput"></a>

```csharp
public string EnvironmentVersionInput { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies"></a>

```csharp
public string[] Dependencies { get; }
```

- *Type:* string[]

---

##### `EnvironmentVersion`<sup>Required</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion"></a>

```csharp
public string EnvironmentVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec</a>

---



