# `dataDatabricksAssumeGroupRestrictedSharingGroup` Submodule <a name="`dataDatabricksAssumeGroupRestrictedSharingGroup` Submodule" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroup <a name="DataDatabricksAssumeGroupRestrictedSharingGroup" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroup(Construct Scope, string Id, DataDatabricksAssumeGroupRestrictedSharingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig">DataDatabricksAssumeGroupRestrictedSharingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig">DataDatabricksAssumeGroupRestrictedSharingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAssumeGroupRestrictedSharingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAssumeGroupRestrictedSharingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAssumeGroupRestrictedSharingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAssumeGroupRestrictedSharingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.groupDisplayName">GroupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId">RestrictedSharingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.groupDisplayName"></a>

```csharp
public string GroupDisplayName { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfig"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a>

---

##### `RestrictedSharingGroupId`<sup>Required</sup> <a name="RestrictedSharingGroupId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId"></a>

```csharp
public string RestrictedSharingGroupId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroup#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_group#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---



