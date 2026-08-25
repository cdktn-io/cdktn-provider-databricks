# `dataDatabricksWorkspaceIamServicePrincipalsV2` Submodule <a name="`dataDatabricksWorkspaceIamServicePrincipalsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2 <a name="DataDatabricksWorkspaceIamServicePrincipalsV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2 databricks_workspace_iam_service_principals_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2(Construct Scope, string Id, DataDatabricksWorkspaceIamServicePrincipalsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config">DataDatabricksWorkspaceIamServicePrincipalsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config">DataDatabricksWorkspaceIamServicePrincipalsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamServicePrincipalsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamServicePrincipalsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamServicePrincipalsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceIamServicePrincipalsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceIamServicePrincipalsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceIamServicePrincipalsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamServicePrincipalsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.servicePrincipals">ServicePrincipals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference</a>

---

##### `ServicePrincipals`<sup>Required</sup> <a name="ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.servicePrincipals"></a>

```csharp
public DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList ServicePrincipals { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2Config <a name="DataDatabricksWorkspaceIamServicePrincipalsV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filter = null,
    double PageSize = null,
    DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#filter DataDatabricksWorkspaceIamServicePrincipalsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#page_size DataDatabricksWorkspaceIamServicePrincipalsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#filter DataDatabricksWorkspaceIamServicePrincipalsV2#filter}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#page_size DataDatabricksWorkspaceIamServicePrincipalsV2#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals {
    string ServicePrincipalId,
    DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#service_principal_id DataDatabricksWorkspaceIamServicePrincipalsV2#service_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}. |

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#service_principal_id DataDatabricksWorkspaceIamServicePrincipalsV2#service_principal_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get"></a>

```csharp
private DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a>[]

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus">AccountSpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountSpStatus`<sup>Required</sup> <a name="AccountSpStatus" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus"></a>

```csharp
public string AccountSpStatus { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a>

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

---



