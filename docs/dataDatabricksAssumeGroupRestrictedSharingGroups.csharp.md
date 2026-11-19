# `dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule <a name="`dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups databricks_assume_group_restricted_sharing_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroups(Construct Scope, string Id, DataDatabricksAssumeGroupRestrictedSharingGroupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAssumeGroupRestrictedSharingGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAssumeGroupRestrictedSharingGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAssumeGroupRestrictedSharingGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups">RestrictedSharingGroups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `RestrictedSharingGroups`<sup>Required</sup> <a name="RestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList RestrictedSharingGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups {
    string Name,
    DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get"></a>

```csharp
private DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>[]

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName">GroupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId">RestrictedSharingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName"></a>

```csharp
public string GroupDisplayName { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `RestrictedSharingGroupId`<sup>Required</sup> <a name="RestrictedSharingGroupId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId"></a>

```csharp
public string RestrictedSharingGroupId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---



