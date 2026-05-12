# `dataDatabricksQualityMonitorsV2` Submodule <a name="`dataDatabricksQualityMonitorsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksQualityMonitorsV2 <a name="DataDatabricksQualityMonitorsV2" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2 databricks_quality_monitors_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2(Construct Scope, string Id, DataDatabricksQualityMonitorsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config">DataDatabricksQualityMonitorsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config">DataDatabricksQualityMonitorsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksQualityMonitorsV2ProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig">DataDatabricksQualityMonitorsV2ProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksQualityMonitorsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksQualityMonitorsV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksQualityMonitorsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksQualityMonitorsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksQualityMonitorsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference">DataDatabricksQualityMonitorsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.qualityMonitors">QualityMonitors</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList">DataDatabricksQualityMonitorsV2QualityMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig">DataDatabricksQualityMonitorsV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.providerConfig"></a>

```csharp
public DataDatabricksQualityMonitorsV2ProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference">DataDatabricksQualityMonitorsV2ProviderConfigOutputReference</a>

---

##### `QualityMonitors`<sup>Required</sup> <a name="QualityMonitors" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.qualityMonitors"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsList QualityMonitors { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList">DataDatabricksQualityMonitorsV2QualityMonitorsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2ProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig">DataDatabricksQualityMonitorsV2ProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksQualityMonitorsV2Config <a name="DataDatabricksQualityMonitorsV2Config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksQualityMonitorsV2ProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#page_size DataDatabricksQualityMonitorsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig">DataDatabricksQualityMonitorsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#provider_config DataDatabricksQualityMonitorsV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#page_size DataDatabricksQualityMonitorsV2#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.providerConfig"></a>

```csharp
public DataDatabricksQualityMonitorsV2ProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig">DataDatabricksQualityMonitorsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#provider_config DataDatabricksQualityMonitorsV2#provider_config}.

---

### DataDatabricksQualityMonitorsV2ProviderConfig <a name="DataDatabricksQualityMonitorsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2ProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#workspace_id DataDatabricksQualityMonitorsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#workspace_id DataDatabricksQualityMonitorsV2#workspace_id}.

---

### DataDatabricksQualityMonitorsV2QualityMonitors <a name="DataDatabricksQualityMonitorsV2QualityMonitors" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitors {
    string ObjectId,
    string ObjectType,
    DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#object_id DataDatabricksQualityMonitorsV2#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#object_type DataDatabricksQualityMonitorsV2#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#provider_config DataDatabricksQualityMonitorsV2#provider_config}. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#object_id DataDatabricksQualityMonitorsV2#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#object_type DataDatabricksQualityMonitorsV2#object_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.providerConfig"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#provider_config DataDatabricksQualityMonitorsV2#provider_config}.

---

### DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig <a name="DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig {
    string[] ExcludedTableFullNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#excluded_table_full_names DataDatabricksQualityMonitorsV2#excluded_table_full_names}. |

---

##### `ExcludedTableFullNames`<sup>Optional</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#excluded_table_full_names DataDatabricksQualityMonitorsV2#excluded_table_full_names}.

---

### DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig <a name="DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#workspace_id DataDatabricksQualityMonitorsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#workspace_id DataDatabricksQualityMonitorsV2#workspace_id}.

---

### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations {
    string Name = null,
    DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheck = null,
    DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck RangeValidityCheck = null,
    DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#name DataDatabricksQualityMonitorsV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#percent_null_validity_check DataDatabricksQualityMonitorsV2#percent_null_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#range_validity_check DataDatabricksQualityMonitorsV2#range_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#uniqueness_validity_check DataDatabricksQualityMonitorsV2#uniqueness_validity_check}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#name DataDatabricksQualityMonitorsV2#name}.

---

##### `PercentNullValidityCheck`<sup>Optional</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.percentNullValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#percent_null_validity_check DataDatabricksQualityMonitorsV2#percent_null_validity_check}.

---

##### `RangeValidityCheck`<sup>Optional</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.rangeValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck RangeValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#range_validity_check DataDatabricksQualityMonitorsV2#range_validity_check}.

---

##### `UniquenessValidityCheck`<sup>Optional</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations.property.uniquenessValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#uniqueness_validity_check DataDatabricksQualityMonitorsV2#uniqueness_validity_check}.

---

### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck {
    string[] ColumnNames = null,
    double UpperBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound">UpperBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#upper_bound DataDatabricksQualityMonitorsV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound"></a>

```csharp
public double UpperBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#upper_bound DataDatabricksQualityMonitorsV2#upper_bound}.

---

### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck {
    string[] ColumnNames = null,
    double LowerBound = null,
    double UpperBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck.property.lowerBound">LowerBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#lower_bound DataDatabricksQualityMonitorsV2#lower_bound}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck.property.upperBound">UpperBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#upper_bound DataDatabricksQualityMonitorsV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}.

---

##### `LowerBound`<sup>Optional</sup> <a name="LowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck.property.lowerBound"></a>

```csharp
public double LowerBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#lower_bound DataDatabricksQualityMonitorsV2#lower_bound}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck.property.upperBound"></a>

```csharp
public double UpperBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#upper_bound DataDatabricksQualityMonitorsV2#upper_bound}.

---

### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck {
    string[] ColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksQualityMonitorsV2ProviderConfigOutputReference <a name="DataDatabricksQualityMonitorsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig">DataDatabricksQualityMonitorsV2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2ProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2ProviderConfig">DataDatabricksQualityMonitorsV2ProviderConfig</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">ResetExcludedTableFullNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedTableFullNames` <a name="ResetExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```csharp
private void ResetExcludedTableFullNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.lastRunId">LastRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.latestRunStatus">LatestRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">ExcludedTableFullNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastRunId`<sup>Required</sup> <a name="LastRunId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```csharp
public string LastRunId { get; }
```

- *Type:* string

---

##### `LatestRunStatus`<sup>Required</sup> <a name="LatestRunStatus" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```csharp
public string LatestRunStatus { get; }
```

- *Type:* string

---

##### `ExcludedTableFullNamesInput`<sup>Optional</sup> <a name="ExcludedTableFullNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```csharp
public string[] ExcludedTableFullNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedTableFullNames`<sup>Required</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsList <a name="DataDatabricksQualityMonitorsV2QualityMonitorsList" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.get"></a>

```csharp
private DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors">DataDatabricksQualityMonitorsV2QualityMonitors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors">DataDatabricksQualityMonitorsV2QualityMonitors</a>[]

---


### DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.validityCheckConfigurations">ValidityCheckConfigurations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors">DataDatabricksQualityMonitorsV2QualityMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.anomalyDetectionConfig"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference AnomalyDetectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference</a>

---

##### `ValidityCheckConfigurations`<sup>Required</sup> <a name="ValidityCheckConfigurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.validityCheckConfigurations"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList ValidityCheckConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig</a>

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors">DataDatabricksQualityMonitorsV2QualityMonitors</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig">DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.get"></a>

```csharp
private DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations</a>[]

---


### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck">PutPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putRangeValidityCheck">PutRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck">PutUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck">ResetPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetRangeValidityCheck">ResetRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck">ResetUniquenessValidityCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPercentNullValidityCheck` <a name="PutPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck"></a>

```csharp
private void PutPercentNullValidityCheck(DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `PutRangeValidityCheck` <a name="PutRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putRangeValidityCheck"></a>

```csharp
private void PutRangeValidityCheck(DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `PutUniquenessValidityCheck` <a name="PutUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck"></a>

```csharp
private void PutUniquenessValidityCheck(DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPercentNullValidityCheck` <a name="ResetPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck"></a>

```csharp
private void ResetPercentNullValidityCheck()
```

##### `ResetRangeValidityCheck` <a name="ResetRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetRangeValidityCheck"></a>

```csharp
private void ResetRangeValidityCheck()
```

##### `ResetUniquenessValidityCheck` <a name="ResetUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck"></a>

```csharp
private void ResetUniquenessValidityCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput">PercentNullValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput">RangeValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput">UniquenessValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentNullValidityCheck`<sup>Required</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference PercentNullValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a>

---

##### `RangeValidityCheck`<sup>Required</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.rangeValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference RangeValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference</a>

---

##### `UniquenessValidityCheck`<sup>Required</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference UniquenessValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PercentNullValidityCheckInput`<sup>Optional</sup> <a name="PercentNullValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `RangeValidityCheckInput`<sup>Optional</sup> <a name="RangeValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck RangeValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `UniquenessValidityCheckInput`<sup>Optional</sup> <a name="UniquenessValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound"></a>

```csharp
private void ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput"></a>

```csharp
public double UpperBoundInput { get; }
```

- *Type:* double

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound"></a>

```csharp
public double UpperBound { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound">ResetLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetLowerBound` <a name="ResetLowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound"></a>

```csharp
private void ResetLowerBound()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound"></a>

```csharp
private void ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput">LowerBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound">LowerBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `LowerBoundInput`<sup>Optional</sup> <a name="LowerBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput"></a>

```csharp
public double LowerBoundInput { get; }
```

- *Type:* double

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput"></a>

```csharp
public double UpperBoundInput { get; }
```

- *Type:* double

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `LowerBound`<sup>Required</sup> <a name="LowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound"></a>

```csharp
public double LowerBound { get; }
```

- *Type:* double

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound"></a>

```csharp
public double UpperBound { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck</a>

---



