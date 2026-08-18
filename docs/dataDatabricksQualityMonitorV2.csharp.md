# `dataDatabricksQualityMonitorV2` Submodule <a name="`dataDatabricksQualityMonitorV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksQualityMonitorV2 <a name="DataDatabricksQualityMonitorV2" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2 databricks_quality_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2(Construct Scope, string Id, DataDatabricksQualityMonitorV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config">DataDatabricksQualityMonitorV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config">DataDatabricksQualityMonitorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksQualityMonitorV2ProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksQualityMonitorV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksQualityMonitorV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksQualityMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksQualityMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference">DataDatabricksQualityMonitorV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.validityCheckConfigurations">ValidityCheckConfigurations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig"></a>

```csharp
public DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference AnomalyDetectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfig"></a>

```csharp
public DataDatabricksQualityMonitorV2ProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference">DataDatabricksQualityMonitorV2ProviderConfigOutputReference</a>

---

##### `ValidityCheckConfigurations`<sup>Required</sup> <a name="ValidityCheckConfigurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.validityCheckConfigurations"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList ValidityCheckConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfig <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2AnomalyDetectionConfig {
    string[] ExcludedTableFullNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#excluded_table_full_names DataDatabricksQualityMonitorV2#excluded_table_full_names}. |

---

##### `ExcludedTableFullNames`<sup>Optional</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#excluded_table_full_names DataDatabricksQualityMonitorV2#excluded_table_full_names}.

---

### DataDatabricksQualityMonitorV2Config <a name="DataDatabricksQualityMonitorV2Config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ObjectId,
    string ObjectType,
    DataDatabricksQualityMonitorV2ProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.providerConfig"></a>

```csharp
public DataDatabricksQualityMonitorV2ProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}.

---

### DataDatabricksQualityMonitorV2ProviderConfig <a name="DataDatabricksQualityMonitorV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurations <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurations {
    string Name = null,
    DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheck = null,
    DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck RangeValidityCheck = null,
    DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#name DataDatabricksQualityMonitorV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#percent_null_validity_check DataDatabricksQualityMonitorV2#percent_null_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#range_validity_check DataDatabricksQualityMonitorV2#range_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#uniqueness_validity_check DataDatabricksQualityMonitorV2#uniqueness_validity_check}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#name DataDatabricksQualityMonitorV2#name}.

---

##### `PercentNullValidityCheck`<sup>Optional</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#percent_null_validity_check DataDatabricksQualityMonitorV2#percent_null_validity_check}.

---

##### `RangeValidityCheck`<sup>Optional</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck RangeValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#range_validity_check DataDatabricksQualityMonitorV2#range_validity_check}.

---

##### `UniquenessValidityCheck`<sup>Optional</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#uniqueness_validity_check DataDatabricksQualityMonitorV2#uniqueness_validity_check}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck {
    string[] ColumnNames = null,
    double UpperBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound">UpperBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound"></a>

```csharp
public double UpperBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck {
    string[] ColumnNames = null,
    double LowerBound = null,
    double UpperBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound">LowerBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound">UpperBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

##### `LowerBound`<sup>Optional</sup> <a name="LowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound"></a>

```csharp
public double LowerBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound"></a>

```csharp
public double UpperBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck {
    string[] ColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">ResetExcludedTableFullNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedTableFullNames` <a name="ResetExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```csharp
private void ResetExcludedTableFullNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId">LastRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus">LatestRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">ExcludedTableFullNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastRunId`<sup>Required</sup> <a name="LastRunId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```csharp
public string LastRunId { get; }
```

- *Type:* string

---

##### `LatestRunStatus`<sup>Required</sup> <a name="LatestRunStatus" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```csharp
public string LatestRunStatus { get; }
```

- *Type:* string

---

##### `ExcludedTableFullNamesInput`<sup>Optional</sup> <a name="ExcludedTableFullNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```csharp
public string[] ExcludedTableFullNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedTableFullNames`<sup>Required</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksQualityMonitorV2AnomalyDetectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a>

---


### DataDatabricksQualityMonitorV2ProviderConfigOutputReference <a name="DataDatabricksQualityMonitorV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get"></a>

```csharp
private DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ValidityCheckConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a>[]

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck">PutPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck">PutRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck">PutUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck">ResetPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck">ResetRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck">ResetUniquenessValidityCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPercentNullValidityCheck` <a name="PutPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck"></a>

```csharp
private void PutPercentNullValidityCheck(DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `PutRangeValidityCheck` <a name="PutRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck"></a>

```csharp
private void PutRangeValidityCheck(DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `PutUniquenessValidityCheck` <a name="PutUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck"></a>

```csharp
private void PutUniquenessValidityCheck(DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPercentNullValidityCheck` <a name="ResetPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck"></a>

```csharp
private void ResetPercentNullValidityCheck()
```

##### `ResetRangeValidityCheck` <a name="ResetRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck"></a>

```csharp
private void ResetRangeValidityCheck()
```

##### `ResetUniquenessValidityCheck` <a name="ResetUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck"></a>

```csharp
private void ResetUniquenessValidityCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput">PercentNullValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput">RangeValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput">UniquenessValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentNullValidityCheck`<sup>Required</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference PercentNullValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a>

---

##### `RangeValidityCheck`<sup>Required</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference RangeValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a>

---

##### `UniquenessValidityCheck`<sup>Required</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference UniquenessValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PercentNullValidityCheckInput`<sup>Optional</sup> <a name="PercentNullValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `RangeValidityCheckInput`<sup>Optional</sup> <a name="RangeValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck RangeValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `UniquenessValidityCheckInput`<sup>Optional</sup> <a name="UniquenessValidityCheckInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksQualityMonitorV2ValidityCheckConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound"></a>

```csharp
private void ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput"></a>

```csharp
public double UpperBoundInput { get; }
```

- *Type:* double

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound"></a>

```csharp
public double UpperBound { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound">ResetLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetLowerBound` <a name="ResetLowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound"></a>

```csharp
private void ResetLowerBound()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound"></a>

```csharp
private void ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput">LowerBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound">LowerBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `LowerBoundInput`<sup>Optional</sup> <a name="LowerBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput"></a>

```csharp
public double LowerBoundInput { get; }
```

- *Type:* double

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput"></a>

```csharp
public double UpperBoundInput { get; }
```

- *Type:* double

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `LowerBound`<sup>Required</sup> <a name="LowerBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound"></a>

```csharp
public double LowerBound { get; }
```

- *Type:* double

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound"></a>

```csharp
public double UpperBound { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---



