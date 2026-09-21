# `dataDatabricksWorkspaceIamExternalUserV2` Submodule <a name="`dataDatabricksWorkspaceIamExternalUserV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamExternalUserV2 <a name="DataDatabricksWorkspaceIamExternalUserV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2 databricks_workspace_iam_external_user_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamExternalUserV2(Construct Scope, string Id, DataDatabricksWorkspaceIamExternalUserV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config">DataDatabricksWorkspaceIamExternalUserV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config">DataDatabricksWorkspaceIamExternalUserV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksWorkspaceIamExternalUserV2ProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamExternalUserV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamExternalUserV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamExternalUserV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamExternalUserV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamExternalUserV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamExternalUserV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceIamExternalUserV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceIamExternalUserV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamExternalUserV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountUserStatus">AccountUserStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.externalUserId">ExternalUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fullName">FullName</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference">DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.internalId">InternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountUserStatus`<sup>Required</sup> <a name="AccountUserStatus" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.accountUserStatus"></a>

```csharp
public string AccountUserStatus { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalUserId`<sup>Required</sup> <a name="ExternalUserId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.externalUserId"></a>

```csharp
public string ExternalUserId { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.fullName"></a>

```csharp
public DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference FullName { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference">DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference</a>

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.internalId"></a>

```csharp
public string InternalId { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceIamExternalUserV2ProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamExternalUserV2Config <a name="DataDatabricksWorkspaceIamExternalUserV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamExternalUserV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksWorkspaceIamExternalUserV2ProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#name DataDatabricksWorkspaceIamExternalUserV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#provider_config DataDatabricksWorkspaceIamExternalUserV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#name DataDatabricksWorkspaceIamExternalUserV2#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2Config.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceIamExternalUserV2ProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#provider_config DataDatabricksWorkspaceIamExternalUserV2#provider_config}.

---

### DataDatabricksWorkspaceIamExternalUserV2FullName <a name="DataDatabricksWorkspaceIamExternalUserV2FullName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamExternalUserV2FullName {

};
```


### DataDatabricksWorkspaceIamExternalUserV2ProviderConfig <a name="DataDatabricksWorkspaceIamExternalUserV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamExternalUserV2ProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#workspace_id DataDatabricksWorkspaceIamExternalUserV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/workspace_iam_external_user_v2#workspace_id DataDatabricksWorkspaceIamExternalUserV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference <a name="DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName">DataDatabricksWorkspaceIamExternalUserV2FullName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullNameOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksWorkspaceIamExternalUserV2FullName InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2FullName">DataDatabricksWorkspaceIamExternalUserV2FullName</a>

---


### DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceIamExternalUserV2ProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamExternalUserV2.DataDatabricksWorkspaceIamExternalUserV2ProviderConfig">DataDatabricksWorkspaceIamExternalUserV2ProviderConfig</a>

---



