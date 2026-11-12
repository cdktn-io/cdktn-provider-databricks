# `dataDatabricksLakewatchAlertConfig` Submodule <a name="`dataDatabricksLakewatchAlertConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchAlertConfig <a name="DataDatabricksLakewatchAlertConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config databricks_lakewatch_alert_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfig(Construct Scope, string Id, DataDatabricksLakewatchAlertConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig">DataDatabricksLakewatchAlertConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig">DataDatabricksLakewatchAlertConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksLakewatchAlertConfigProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchAlertConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchAlertConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchAlertConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchAlertConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchAlertConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchAlertConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchAlertConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow">DefaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow">DefaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow">EffectiveDefaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow">EffectiveDefaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig">SecurityAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig">SystemAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="DefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow"></a>

```csharp
public string DefaultSecurityAlertCollationWindow { get; }
```

- *Type:* string

---

##### `DefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="DefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow"></a>

```csharp
public string DefaultSystemAlertCollationWindow { get; }
```

- *Type:* string

---

##### `EffectiveDefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="EffectiveDefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow"></a>

```csharp
public string EffectiveDefaultSecurityAlertCollationWindow { get; }
```

- *Type:* string

---

##### `EffectiveDefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="EffectiveDefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow"></a>

```csharp
public string EffectiveDefaultSystemAlertCollationWindow { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchAlertConfigProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a>

---

##### `SecurityAlertExportConfig`<sup>Required</sup> <a name="SecurityAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference SecurityAlertExportConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a>

---

##### `SystemAlertExportConfig`<sup>Required</sup> <a name="SystemAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference SystemAlertExportConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy"></a>

```csharp
public DataDatabricksLakewatchAlertConfigUpdatedByOutputReference UpdatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchAlertConfigConfig <a name="DataDatabricksLakewatchAlertConfigConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksLakewatchAlertConfigProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchAlertConfigProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}.

---

### DataDatabricksLakewatchAlertConfigProviderConfig <a name="DataDatabricksLakewatchAlertConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig {
    bool|IResolvable Enabled = null,
    DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira Jira = null,
    DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow ServiceNow = null,
    DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack Slack = null,
    DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines Tines = null,
    DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook Webhook = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira Jira { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack Slack { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `Tines`<sup>Optional</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines Tines { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook Webhook { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira {
    string ApiTokenUcSecret,
    string DefaultIssueType,
    string InstanceUrl,
    string ProjectKey,
    string UserEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey">ProjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail">UserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail"></a>

```csharp
public string UserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow {
    string ClientId,
    string ClientSecretUcSecret,
    string InstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack {
    string BotTokenUcSecret,
    string Channel
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel">Channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines {
    string WebhookSecretUcSecret,
    string WebhookUri,
    bool|IResolvable ExportUpdates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri">WebhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri"></a>

```csharp
public string WebhookUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook {
    bool|IResolvable ExportUpdates = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfig {
    bool|IResolvable Enabled = null,
    DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira Jira = null,
    DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow ServiceNow = null,
    DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack Slack = null,
    DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines Tines = null,
    DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook Webhook = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira Jira { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack Slack { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `Tines`<sup>Optional</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines Tines { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook Webhook { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira {
    string ApiTokenUcSecret,
    string DefaultIssueType,
    string InstanceUrl,
    string ProjectKey,
    string UserEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey">ProjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail">UserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail"></a>

```csharp
public string UserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow {
    string ClientId,
    string ClientSecretUcSecret,
    string InstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack {
    string BotTokenUcSecret,
    string Channel
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel">Channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines {
    string WebhookSecretUcSecret,
    string WebhookUri,
    bool|IResolvable ExportUpdates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri">WebhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri"></a>

```csharp
public string WebhookUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook {
    bool|IResolvable ExportUpdates = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigUpdatedBy <a name="DataDatabricksLakewatchAlertConfigUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigUpdatedBy {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchAlertConfigProviderConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">ApiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">DefaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecretInput`<sup>Optional</sup> <a name="ApiTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```csharp
public string ApiTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `DefaultIssueTypeInput`<sup>Optional</sup> <a name="DefaultIssueTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```csharp
public string DefaultIssueTypeInput { get; }
```

- *Type:* string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```csharp
public string InstanceUrlInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```csharp
public string UserEmailInput { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; }
```

- *Type:* string

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines">PutTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira">ResetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines">ResetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJira` <a name="PutJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira"></a>

```csharp
private void PutJira(DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack"></a>

```csharp
private void PutSlack(DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `PutTines` <a name="PutTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines"></a>

```csharp
private void PutTines(DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook"></a>

```csharp
private void PutWebhook(DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJira` <a name="ResetJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira"></a>

```csharp
private void ResetJira()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack"></a>

```csharp
private void ResetSlack()
```

##### `ResetTines` <a name="ResetTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines"></a>

```csharp
private void ResetTines()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook"></a>

```csharp
private void ResetWebhook()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput">JiraInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput">SlackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput">TinesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput">WebhookInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference Jira { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference Slack { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a>

---

##### `Tines`<sup>Required</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference Tines { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference Webhook { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira JiraInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack SlackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `TinesInput`<sup>Optional</sup> <a name="TinesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines TinesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook WebhookInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">ClientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecretInput`<sup>Optional</sup> <a name="ClientSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```csharp
public string ClientSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">BotTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BotTokenUcSecretInput`<sup>Optional</sup> <a name="BotTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```csharp
public string BotTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">WebhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput">WebhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri">WebhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecretInput`<sup>Optional</sup> <a name="WebhookSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```csharp
public string WebhookSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `WebhookUriInput`<sup>Optional</sup> <a name="WebhookUriInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```csharp
public string WebhookUriInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; }
```

- *Type:* string

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```csharp
public string WebhookUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">ApiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">DefaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecretInput`<sup>Optional</sup> <a name="ApiTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```csharp
public string ApiTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `DefaultIssueTypeInput`<sup>Optional</sup> <a name="DefaultIssueTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```csharp
public string DefaultIssueTypeInput { get; }
```

- *Type:* string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```csharp
public string InstanceUrlInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```csharp
public string UserEmailInput { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; }
```

- *Type:* string

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines">PutTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira">ResetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines">ResetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJira` <a name="PutJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira"></a>

```csharp
private void PutJira(DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack"></a>

```csharp
private void PutSlack(DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `PutTines` <a name="PutTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines"></a>

```csharp
private void PutTines(DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook"></a>

```csharp
private void PutWebhook(DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJira` <a name="ResetJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira"></a>

```csharp
private void ResetJira()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack"></a>

```csharp
private void ResetSlack()
```

##### `ResetTines` <a name="ResetTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines"></a>

```csharp
private void ResetTines()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook"></a>

```csharp
private void ResetWebhook()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput">JiraInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput">SlackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput">TinesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput">WebhookInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference Jira { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference Slack { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a>

---

##### `Tines`<sup>Required</sup> <a name="Tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference Tines { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference Webhook { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira JiraInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack SlackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `TinesInput`<sup>Optional</sup> <a name="TinesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines TinesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook WebhookInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchAlertConfigSystemAlertExportConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">ClientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecretInput`<sup>Optional</sup> <a name="ClientSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```csharp
public string ClientSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">BotTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BotTokenUcSecretInput`<sup>Optional</sup> <a name="BotTokenUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```csharp
public string BotTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">WebhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput">WebhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri">WebhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecretInput`<sup>Optional</sup> <a name="WebhookSecretUcSecretInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```csharp
public string WebhookSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `WebhookUriInput`<sup>Optional</sup> <a name="WebhookUriInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```csharp
public string WebhookUriInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; }
```

- *Type:* string

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```csharp
public string WebhookUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---


### DataDatabricksLakewatchAlertConfigUpdatedByOutputReference <a name="DataDatabricksLakewatchAlertConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchAlertConfigUpdatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchAlertConfigUpdatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a>

---



